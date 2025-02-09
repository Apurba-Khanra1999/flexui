import { ComponentBreakpointsType } from "@/utils/Types";
import { Button, Tooltip } from "@heroui/react";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons/lib";

function ComponetBreakpoints({
  title,
  icon: Icon,
  width,
  componentBreakpoint,
  setComponetBreakpoint,
}: {
  title: string;
  icon: IconType;
  width: string;
  componentBreakpoint: ComponentBreakpointsType;
  setComponetBreakpoint: Dispatch<SetStateAction<ComponentBreakpointsType>>;
}) {
  return (
    <Tooltip content={title} className="capitalize" color="success">
      <Button
        size="sm"
        startContent={<Icon size={20} />}
        isIconOnly
        // color="success"
        variant={componentBreakpoint.name === title ? "solid" : "bordered"}
        onPress={() => setComponetBreakpoint({ name: title, width: width })}
      />
    </Tooltip>
  );
}

export default ComponetBreakpoints;
