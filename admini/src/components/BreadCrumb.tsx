import { Link } from "react-router-dom";

interface Props{
  page:string;

}

const BreadCrumb = ({page}:Props) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <h2 className="text-title-md2 font-bold text-black dark:text-white">
      {page}
    </h2>

    <nav>
      <ol className="flex items-center gap-2">
        <li><Link className="font-medium" to="/">Dashboard /</Link></li>
        <li className="font-medium text-primary">{page}</li>
      </ol>
    </nav>
  </div>
  )
}

export default BreadCrumb