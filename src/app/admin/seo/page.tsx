"use client";

import Link from "next/link";

import axios from "axios";

import {
    useEffect,
    useState,
} from "react";

import toast from "react-hot-toast";


export default function SeoPage() {


    const [seo, setSeo] =
        useState<any[]>([]);


    const [loading, setLoading] =
        useState(true);


    const [search, setSearch] =
        useState("");



    // FETCH SEO

    const fetchSeo = async()=>{

        try{


            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/seo/all`
                );


            setSeo(
                res.data.seo
            );


        }catch(error){


            toast.error(
                "Failed to load SEO"
            );


        }finally{


            setLoading(false);


        }

    };



    useEffect(()=>{

        fetchSeo();

    },[]);





    // DELETE SEO

    const handleDelete = async(
        id:string
    )=>{


        if(
            !confirm(
                "Delete this SEO?"
            )
        ) return;



        try{


            await axios.delete(

                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/seo/${id}`

            );



            setSeo(prev=>
                prev.filter(
                    item=>item._id !== id
                )
            );



            toast.success(
                "SEO deleted"
            );


        }catch(error){


            toast.error(
                "Delete failed"
            );

        }


    };





    // STATUS

    const toggleStatus = async(
        id:string
    )=>{


        try{


            await axios.patch(

                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/seo/status/${id}`

            );



            setSeo(prev=>

                prev.map(item=>

                    item._id===id

                    ?

                    {
                        ...item,
                        status:
                        !item.status
                    }

                    :

                    item

                )

            );



            toast.success(
                "Status updated"
            );


        }catch(error){


            toast.error(
                "Status update failed"
            );


        }


    };






    const filteredSeo =
        seo.filter(item=>

            item.page
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            item.metaTitle
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

        );






    if(loading){


        return (

            <div className="space-y-4">


                <div className="h-8 w-40 rounded bg-gray-200 animate-pulse"/>



                {
                    [...Array(5)].map(
                        (_,i)=>(

                            <div
                            key={i}
                            className="h-14 rounded bg-gray-100 animate-pulse"
                            />

                        )
                    )
                }


            </div>

        );


    }







    return (


        <div className="space-y-6">



            {/* HEADER */}


            <div className="flex items-center justify-between">


                <h1 className="text-3xl font-bold">
                    SEO Pages
                </h1>



                <Link

                href="/admin/seo/create"

                className="rounded-xl bg-blue-600 px-5 py-3 text-white"

                >

                    Add SEO

                </Link>



            </div>







            {/* SEARCH */}



            <input

            type="text"

            placeholder="Search page..."

            value={search}

            onChange={(e)=>
                setSearch(
                    e.target.value
                )
            }

            className="w-full rounded-xl border px-4 py-3"

            />








            {/* TABLE */}



            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">


                <table className="w-full">


                    <thead className="bg-gray-100">


                        <tr>


                            <th className="p-4 text-left">
                                Page
                            </th>


                            <th className="p-4 text-left">
                                Meta Title
                            </th>


                            <th className="p-4 text-left">
                                Canonical
                            </th>


                            <th className="p-4 text-left">
                                Status
                            </th>


                            <th className="p-4 text-left">
                                Actions
                            </th>



                        </tr>


                    </thead>





                    <tbody>



                    {
                        filteredSeo.length === 0

                        ?

                        (

                        <tr>

                        <td
                        colSpan={5}
                        className="p-8 text-center text-gray-500"
                        >

                            No SEO found

                        </td>

                        </tr>

                        )


                        :


                        filteredSeo.map(item=>(



                        <tr

                        key={item._id}

                        className="border-t"

                        >



                            <td className="p-4 font-medium">

                                {item.page}

                            </td>





                            <td className="p-4">

                                {item.metaTitle || "-"}

                            </td>





                            <td className="p-4 text-sm text-gray-500">

                                {item.canonicalUrl || "-"}

                            </td>






                            <td className="p-4">


                                <button

                                onClick={()=>
                                    toggleStatus(
                                        item._id
                                    )
                                }

                                className={`relative flex h-7 w-14 items-center rounded-full p-1 transition ${
                                    item.status
                                    ?"bg-green-500"
                                    :"bg-gray-300"
                                }`}

                                >


                                    <div

                                    className={`h-5 w-5 rounded-full bg-white shadow transition ${
                                        item.status
                                        ?"translate-x-7"
                                        :""
                                    }`}

                                    />


                                </button>


                            </td>








                            <td className="flex gap-4 p-4">


                                <Link

                                href={`/admin/seo/edit/${item._id}`}

                                className="text-blue-600"

                                >

                                    Edit

                                </Link>





                                <button

                                onClick={()=>
                                    handleDelete(
                                        item._id
                                    )
                                }

                                className="text-red-600"

                                >

                                    Delete

                                </button>



                            </td>





                        </tr>



                        ))

                    }



                    </tbody>



                </table>



            </div>





        </div>


    );

}