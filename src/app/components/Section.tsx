import { Props, ScriptProps } from "next/script";

export function Section({ children }: ScriptProps) {

    return <div className="gid grid-cols-12 gap-3 w-full">
        {children}
    </div>
}