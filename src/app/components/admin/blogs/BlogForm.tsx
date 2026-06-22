"use client";

import { useEffect, useState } from "react";
import BlogEditor from "./BlogEditor";

interface Props {
  initialData?: any;
  onSubmit: (
    formData: FormData
  ) => Promise<void>;
  loading?: boolean;
}

export default function BlogForm({
  initialData,
  onSubmit,
  loading,
}: Props) {

  const [title, setTitle] =
    useState("");

  const [shortDescription,
    setShortDescription] =
    useState("");

  const [content,
    setContent] =
    useState("");

  const [category,
    setCategory] =
    useState("");

  const [image,
    setImage] =
    useState<File | null>(null);

  const [preview,
    setPreview] =
    useState("");

  const [imageAlt,
    setImageAlt] =
    useState("");

  const [featured,
    setFeatured] =
    useState(false);

  const [status,
    setStatus] =
    useState(true);

  const [metaTitle,
    setMetaTitle] =
    useState("");

  const [metaDescription,
    setMetaDescription] =
    useState("");

  const [metaKeywords,
    setMetaKeywords] =
    useState("");

  const [canonicalUrl,
    setCanonicalUrl] =
    useState("");

  useEffect(() => {

    if (!initialData) return;

    setTitle(initialData.title || "");
    setShortDescription(
      initialData.shortDescription || ""
    );

    setContent(
      initialData.content || ""
    );

    setCategory(
      initialData.category || ""
    );

    setPreview(
      initialData.image || ""
    );

    setImageAlt(
      initialData.imageAlt || ""
    );

    setFeatured(
      initialData.featured || false
    );

    setStatus(
      initialData.status ?? true
    );

    setMetaTitle(
      initialData.metaTitle || ""
    );

    setMetaDescription(
      initialData.metaDescription || ""
    );

    setMetaKeywords(
      initialData.metaKeywords || ""
    );

    setCanonicalUrl(
      initialData.canonicalUrl || ""
    );

  }, [initialData]);

  const submitHandler =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "shortDescription",
        shortDescription
      );

      formData.append(
        "content",
        content
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "imageAlt",
        imageAlt
      );

      formData.append(
        "featured",
        String(featured)
      );

      formData.append(
        "status",
        String(status)
      );

      formData.append(
        "metaTitle",
        metaTitle
      );

      formData.append(
        "metaDescription",
        metaDescription
      );

      formData.append(
        "metaKeywords",
        metaKeywords
      );

      formData.append(
        "canonicalUrl",
        canonicalUrl
      );

      if (image) {
        formData.append(
          "image",
          image
        );
      }

      await onSubmit(formData);
    };

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-6 bg-white p-6 rounded-2xl"
    >

      <input
        placeholder="Blog Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        rows={4}
        placeholder="Short Description"
        value={shortDescription}
        onChange={(e) =>
          setShortDescription(
            e.target.value
          )
        }
        className="w-full border rounded-xl p-4"
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        placeholder="Image Alt"
        value={imageAlt}
        onChange={(e) =>
          setImageAlt(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {

          const file =
            e.target.files?.[0];

          if (!file) return;

          setImage(file);

          setPreview(
            URL.createObjectURL(
              file
            )
          );
        }}
      />

      {preview && (
        <img
          src={preview}
          className="h-32 w-32 object-cover rounded-xl"
        />
      )}

      <BlogEditor
        value={content}
        onChange={setContent}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <label>
          Featured
          <input
            type="checkbox"
            checked={featured}
            onChange={() =>
              setFeatured(
                !featured
              )
            }
          />
        </label>

        <label>
          Active
          <input
            type="checkbox"
            checked={status}
            onChange={() =>
              setStatus(
                !status
              )
            }
          />
        </label>

      </div>

      <div className="space-y-4 border p-5 rounded-xl">

        <h3 className="font-bold">
          SEO Settings
        </h3>

        <input
          placeholder="Meta Title"
          value={metaTitle}
          onChange={(e) =>
            setMetaTitle(
              e.target.value
            )
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        <textarea
          rows={3}
          placeholder="Meta Description"
          value={metaDescription}
          onChange={(e) =>
            setMetaDescription(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        />

        <input
          placeholder="Meta Keywords"
          value={metaKeywords}
          onChange={(e) =>
            setMetaKeywords(
              e.target.value
            )
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Canonical URL"
          value={canonicalUrl}
          onChange={(e) =>
            setCanonicalUrl(
              e.target.value
            )
          }
          className="w-full border rounded-xl px-4 py-3"
        />

      </div>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        {loading
          ? "Saving..."
          : initialData
          ? "Update Blog"
          : "Create Blog"}
      </button>

    </form>
  );
}