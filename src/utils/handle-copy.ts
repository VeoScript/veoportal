import { toast } from "sonner";

export const handleCopy = (textToCopy: string, message?: string): void => {
  const toastMessage = message ?? "Copied to clipboard";

  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  toast.success(toastMessage);
};
