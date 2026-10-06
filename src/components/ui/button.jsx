import { cn } from "@/lib/utils";

export default function Button({ className, ...props }) {
    return (
        <button
            className={
                cn(
                    "w-[150px] h-[50px] roudend-md bg-[#6d28d9] text-white cursor-pointer flex gap-2 items-center justify-center",
                    className
                )
            }
            {...props}
        />
    )
}
