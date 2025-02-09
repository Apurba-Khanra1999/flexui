import { CiMobile1 } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { LiaTabletSolid } from "react-icons/lia";
import { AiOutlineLaptop } from "react-icons/ai";



export const componentBreakpointsData = [
    {
        name: 'mobile',
        icon: TfiMobile,
        width: '340px',
    },
    {
        name: 'small',
        icon: CiMobile1,
        width: '640px',
    },
    {
        name: 'medium',
        icon: TbDeviceIpadHorizontal,
        width: '768px',
    },
    {
        name: 'large',
        icon: LiaTabletSolid,
        width: '1024px',
    },
    {
        name: 'full',
        icon: AiOutlineLaptop,
        width: '100%',
    },
]
