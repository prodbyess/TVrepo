import Image from "next/image"

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="Firestone Solutions"
          width={150}
          height={45}
          className="h-12 w-auto animate-pulse"
        />
      </div>
      <div className="mt-8 flex gap-1">
        <span className="w-2 h-2 bg-[#C41E3A] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-[#C41E3A] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  )
}
