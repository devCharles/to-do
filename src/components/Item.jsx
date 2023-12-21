import clsx from "clsx";

export default function Item({ text, alBorrar }) {
  return (
    <article
      className={clsx(
        "border border-white/5 rounded",
        "flex justify-between items-center",
        "p-2",
        { "bg-red-500 border-purple-600": text === "lavar" }
      )}
    >
      <span>{text}</span>
      <span
        className={clsx(
          "bg-purple-600/50 hover:bg-purple-600/30",
          "rounded p-2 cursor-pointer"
        )}
        onClick={alBorrar}
      >
        Done
      </span>
    </article>
  );
}
