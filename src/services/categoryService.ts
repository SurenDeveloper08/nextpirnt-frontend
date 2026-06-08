import axios from "axios";

const API =
  process.env
    .NEXT_PUBLIC_API_URL;


// ====================================
// GET ALL CATEGORIES ADMIN
// ====================================

export const getCategories =
  async () => {
    const res =
      await axios.get(
        `${API}/api/categories/admin/all`
      );

    return res.data.data;
  };


// ====================================
// GET SINGLE CATEGORY
// ====================================

export const getCategory =
  async (id: string) => {
    const res =
      await axios.get(
        `${API}/api/categories/${id}`
      );

    return res.data.data;
  };


// ====================================
// GET CATEGORY BY SLUG
// WEBSITE
// ====================================

export const getCategoryBySlug =
  async (slug: string) => {
    const res =
      await axios.get(
        `${API}/api/categories/slug/${slug}`
      );

    return res.data.data;
  };


// ====================================
// GET WEBSITE CATEGORIES
// ====================================

export const getWebsiteCategories =
  async () => {
    const res =
      await axios.get(
        `${API}/api/categories/website/all`
      );

    return res.data.data;
  };


// ====================================
// CREATE CATEGORY
// ====================================

export const createCategory =
  async (
    formData: FormData
  ) => {
    const res =
      await axios.post(
        `${API}/api/categories`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return res.data;
  };


// ====================================
// UPDATE CATEGORY
// ====================================

export const updateCategory =
  async (
    id: string,
    formData: FormData
  ) => {
    const res =
      await axios.put(
        `${API}/api/categories/${id}`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return res.data;
  };


// ====================================
// DELETE CATEGORY
// ====================================

export const deleteCategory =
  async (id: string) => {
    const res =
      await axios.delete(
        `${API}/api/categories/${id}`
      );

    return res.data;
  };


// ====================================
// ACTIVE / INACTIVE
// ====================================

export const toggleCategoryStatus =
  async (id: string) => {
    const res =
      await axios.patch(
        `${API}/api/categories/status/${id}`
      );

    return res.data;
  };


// ====================================
// FEATURE / UNFEATURE
// ====================================

export const toggleFeaturedCategory =
  async (id: string) => {
    const res =
      await axios.patch(
        `${API}/api/categories/featured/${id}`
      );

    return res.data;
  };