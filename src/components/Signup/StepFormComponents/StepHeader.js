export default function StepHeader({ title, text }) {
  return (
    <div className="mb-4">
      <h3>{title}</h3>
      <p className="paragraph-md text-TEXT_LIGHTGRAY">{text}</p>
    </div>
  );
}
