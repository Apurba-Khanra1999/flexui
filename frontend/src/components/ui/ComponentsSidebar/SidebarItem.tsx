import Link from "next/link";

const SidebarItem = ({
  pathname,
  uniqueSlug,
  uiName,
}: {
  pathname: string | undefined;
  uniqueSlug: string;
  uiName: string;
}) => {
  return (
    <Link
      className={`group flex h-8 w-full items-center rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-accent-foreground ${pathname === uniqueSlug && "bg-zinc-300 dark:bg-zinc-800"} `}
      href={
        uniqueSlug === "components"
          ? "/components"
          : `/components/${uniqueSlug}`
      }
    >
      <span>{uiName}</span>
    </Link>
  );
};
export default SidebarItem;
