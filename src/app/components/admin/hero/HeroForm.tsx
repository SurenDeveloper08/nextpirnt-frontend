"use client";

import { useEffect, useState } from "react";

interface Props {
  initialData?: any;
  onSubmit: (data: FormData) => Promise<void>;
  loading?: boolean;
}

export default function HeroForm({
  initialData,
  onSubmit,
  loading,
}: Props) {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [
    whatsappLink,
    setWhatsappLink,
  ] = useState("");

  const [
    phoneNumber,
    setPhoneNumber,
  ] = useState("");

  const [
    quoteButtonText,
    setQuoteButtonText,
  ] = useState("Get Quote");

  const [
    callButtonText,
    setCallButtonText,
  ] = useState("Call Now");

  const [
    desktopImage,
    setDesktopImage,
  ] = useState<File | null>(
    null
  );

  const [
    mobileImage,
    setMobileImage,
  ] = useState<File | null>(
    null
  );

  const [
    desktopPreview,
    setDesktopPreview,
  ] = useState("");

  const [
    mobilePreview,
    setMobilePreview,
  ] = useState("");

  const [
    isActive,
    setIsActive,
  ] = useState(true);

  useEffect(() => {
    if (!initialData) return;

    setTitle(initialData.title || "");
    setDescription(
      initialData.description || ""
    );

    setWhatsappLink(
      initialData.whatsappLink || ""
    );

    setPhoneNumber(
      initialData.phoneNumber || ""
    );

    setQuoteButtonText(
      initialData.quoteButtonText ||
        "Get Quote"
    );

    setCallButtonText(
      initialData.callButtonText ||
        "Call Now"
    );

    setDesktopPreview(
      initialData.desktopImage || ""
    );

    setMobilePreview(
      initialData.mobileImage || ""
    );

    setIsActive(
      initialData.isActive ?? true
    );
  }, [initialData]);

  const handleSubmit = async (
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
      "description",
      description
    );

    formData.append(
      "whatsappLink",
      whatsappLink
    );

    formData.append(
      "phoneNumber",
      phoneNumber
    );

    formData.append(
      "quoteButtonText",
      quoteButtonText
    );

    formData.append(
      "callButtonText",
      callButtonText
    );

    formData.append(
      "isActive",
      String(isActive)
    );

    if (desktopImage) {
      formData.append(
        "desktopImage",
        desktopImage
      );
    }

    if (mobileImage) {
      formData.append(
        "mobileImage",
        mobileImage
      );
    }

    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white p-6 shadow-sm"
    >
      <div>
        <label>
          Title
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label>
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          value={whatsappLink}
          onChange={(e) =>
            setWhatsappLink(
              e.target.value
            )
          }
          placeholder="Whatsapp Link"
          className="rounded-xl border p-3"
        />

        <input
          value={phoneNumber}
          onChange={(e) =>
            setPhoneNumber(
              e.target.value
            )
          }
          placeholder="Phone Number"
          className="rounded-xl border p-3"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          value={
            quoteButtonText
          }
          onChange={(e) =>
            setQuoteButtonText(
              e.target.value
            )
          }
          placeholder="Quote Button"
          className="rounded-xl border p-3"
        />

        <input
          value={
            callButtonText
          }
          onChange={(e) =>
            setCallButtonText(
              e.target.value
            )
          }
          placeholder="Call Button"
          className="rounded-xl border p-3"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label>
            Desktop Image
          </label>

          <input
            type="file"
            onChange={(e) => {
              const file =
                e.target
                  .files?.[0];

              if (!file)
                return;

              setDesktopImage(
                file
              );

              setDesktopPreview(
                URL.createObjectURL(
                  file
                )
              );
            }}
          />

          {desktopPreview && (
            <img
              src={
                desktopPreview
              }
              className="mt-3 h-40 rounded-xl border object-cover"
            />
          )}
        </div>

        <div>
          <label>
            Mobile Image
          </label>

          <input
            type="file"
            onChange={(e) => {
              const file =
                e.target
                  .files?.[0];

              if (!file)
                return;

              setMobileImage(
                file
              );

              setMobilePreview(
                URL.createObjectURL(
                  file
                )
              );
            }}
          />

          {mobilePreview && (
            <img
              src={
                mobilePreview
              }
              className="mt-3 h-40 rounded-xl border object-cover"
            />
          )}
        </div>
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) =>
            setIsActive(
              e.target.checked
            )
          }
        />
        Active
      </label>

      <button
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        {loading
          ? "Saving..."
          : initialData
          ? "Update Hero"
          : "Create Hero"}
      </button>
    </form>
  );
}