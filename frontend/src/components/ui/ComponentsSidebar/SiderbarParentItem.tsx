import { SidebarParentItemType } from "@/utils/Types";
import { useState } from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import SidebarItem from "./SidebarItem";

const SidebarParentItem = ({
  item,
  pathname,
}: {
  item: SidebarParentItemType;
  pathname: string | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      {/* Parent Item */}
      <div
        className={`group flex h-8 w-full cursor-pointer items-center justify-between rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-accent-foreground"}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <h2 className="capitalize">{item.category.categoryName}</h2>
        {hasChildren && (
          <span className="text-xs">
            {isOpen ? <FiArrowDown size={16} /> : <FiArrowRight size={16} />}
          </span>
        )}
      </div>

      {/* Child Items */}
      {hasChildren && isOpen && (
        <div className="ml-4 mt-1 space-y-1">
          {item?.children?.map((child, index) => (
            <SidebarItem
              key={index}
              pathname={pathname}
              uniqueSlug={child.uniqueSlug}
              uiName={child.uiName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarParentItem;
