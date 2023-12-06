"use client";

import { usePhotosQuery, userApi } from "@/api/user.api";
import { getImageUrl } from "../../utils/getImageUrl";
import ImageGallery from "react-image-gallery";
import { ScreenLoader } from "@/components/shared/ScreenLoader";

export function HomeScreen() {
  const profileQuery = userApi.endpoints.profile.useQueryState();
  const photosQuery = usePhotosQuery();

  if (profileQuery.isFetching || photosQuery.isFetching) {
    return <ScreenLoader />;
  }

  if (profileQuery.isError) {
    window.location.href = "/login";
    return null;
  }

  if (photosQuery.isError) {
    return <div className="h-screen flex justify-center items-center">Error loading photos</div>;
  }

  return (
    <ImageGallery
      items={(photosQuery.data || []).map((photo) => ({
        original: getImageUrl({
          ownerEmail: profileQuery.data?.email!,
          fileCategory: "photos",
          fileName: photo.url,
        }),
        thumbnail: getImageUrl({
          ownerEmail: profileQuery.data?.email!,
          fileCategory: "photos",
          fileName: photo.url,
        }),
      }))}
    />
  );
}
