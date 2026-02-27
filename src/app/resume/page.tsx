import { redirect } from "next/navigation";

export default function ResumePage() {
  // This redirects to the static PDF file in the public folder
  // Make sure to add your actual cv.pdf to the public directory
  redirect("/cv.pdf");
}
