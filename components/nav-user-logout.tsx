import { IconLogout } from "@tabler/icons-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { signOut } from "@/lib/server/appwrite";
import { Button } from "./ui/button";

export default function NavUserLogout() {
  return (
    <form action={signOut}>
      <button type="submit" className="w-full">
        <DropdownMenuItem>
          <IconLogout />
          Log out
        </DropdownMenuItem>
      </button>
    </form>
  );
}
