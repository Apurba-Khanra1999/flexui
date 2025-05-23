import React, { FormEvent, ReactNode } from "react";

export type AppFormType = {
    children: ReactNode;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
    className?: string;
}

export type AppModalType = {
    children: React.ReactNode;
    headerTitle?: string;
    isOpen: boolean;
    onClose?: () => void;
    backdrop?: "transparent" | "opaque" | "blur" | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    ModalFooterComponent?: React.ReactNode;
}

export type AuthModalType = {
    isOpen: boolean
    onClose: () => void
}

export type CodeBlockProps = {
    className?: string;
    children: string;
}
export type AuthFormType = {
    username?: string;
    email: string;
    password: string;
}
export type UserAccountType = {
    id: string;
    username: string;
    email: string;
    profilePic: string;
}

export type ComponetPreviewType = {
    showPreview?: boolean;
    componentTitle: string;
    previewWidth?: string | number | undefined;
    previewHeight?: string | number | undefined;
    iframeRef?: React.RefObject<HTMLIFrameElement | null>;
}

export type ComponentBreakpointsType = {
    name: string;
    width: string;
}

export type SidebarParentItemType = {
    category: { id: string; categoryName: string; slug: string };
    children?: { uiName: string; uniqueSlug: string; categoryId: string }[];


}
