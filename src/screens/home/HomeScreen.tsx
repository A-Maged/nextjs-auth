"use client";

import { usePhotosQuery, userApi } from "@/api/user.api";
import { getImageUrl } from "../../utils/getImageUrl";
import ImageGallery from "react-image-gallery";

export function HomeScreen() {
  const profileQuery = userApi.endpoints.profile.useQueryState();
  const photosQuery = usePhotosQuery();

  if (profileQuery.isFetching || photosQuery.isFetching) {
    return "loading...";
  }

  if (profileQuery.isError) {
    window.location.href = "/login";
    return null;
  }

  return (
    <main className="">
      <ImageGallery
        items={
          photosQuery.data?.map((photo) => ({
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
          })) || []
        }
      />
      ;
    </main>
  );
}
