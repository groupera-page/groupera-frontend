export default function StepContainer({ title, text, children }) {
  return (
    <div>
      <h3 className="mb-4">{title}</h3>
      <p className="paragraph-md">{text}</p>
      {children}
    </div>
  );
}
