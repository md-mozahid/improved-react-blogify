import { Link } from 'react-router-dom'
import Tags from '../../../components/shared/Tags'
import { ReactRoadmap } from '../../../constant/images'

export default function BlogDetails() {
  return (
    <>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">
          Integer Maecenas Eget Viverra
        </h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>
            <Link to="/profile">
              <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
            </Link>
          </div>
          <span className="text-sm text-slate-700 dot">June 28, 2018</span>
          <span className="text-sm text-slate-700 dot">100 Likes</span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={ReactRoadmap}
          alt=""
        />
        <Tags />

        {/* <!-- Content --> */}
        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          Today I was mob programming with Square`s Mobile & Performance
          Reliability team and we toyed with an interesting idea. Our codebase
          has classes that represent screens a user can navigate to. These
          classes are defined in modules, and these modules have an owner team
          defined. When navigating to a screen, we wanted to have the owner team
          information available, at runtime. We created a build tool that looks
          at about 1000 Screen classes, determines the owner team, and generates
          a class to do the lookup at runtime. The generated code looked like
        </div>
      </div>
    </>
  )
}
