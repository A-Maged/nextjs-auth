"use client";
import { useLogoutMutation } from "@/api/auth.api";
import { useProfileQuery } from "@/api/user.api";
import { getImageUrl } from "@/utils/getImageUrl";

export function Nav() {
  const profileQuery = useProfileQuery();
  const [logout] = useLogoutMutation();

  async function onLogoutClick() {
    await logout();
    window.location.href = "/";
  }

  if (!profileQuery.data) {
    return null;
  }

  const avatarUrl = profileQuery.data?.avatar?.startsWith("http")
    ? profileQuery.data?.avatar
    : getImageUrl({
        ownerEmail: profileQuery.data?.email!,
        fileCategory: "avatar",
        fileName: profileQuery.data?.avatar!,
      });

  return (
    <div className="p-2 bg-white text-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={avatarUrl} className="w-14 h-14 rounded-full object-cover" />

          <div>
            <p className="font-bold capitalize">
              {profileQuery.data.firstName} {profileQuery.data.lastName}
            </p>
            <p className="text-sm">{profileQuery.data.email}</p>
          </div>
        </div>

        <button
          onClick={onLogoutClick}
          className=" bg-black disabled:bg-blue-200 text-white rounded-md py-2 px-5"
        >
          logout
        </button>
      </div>
    </div>
  );
}
