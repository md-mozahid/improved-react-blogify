export default function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.split(', ').map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}
