import type { ICourseProps } from "../typings/types";

export function Course({ courses }: { courses: ICourseProps[] }) {
    return (
        <div>
            {courses.map((course, index) => {
                return (
                    <div key={index} className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className=" flex flex-col leading-5">
                                <h1 className="font-bold">{course.title}</h1>
                                <h2 className="ml-2">{course.school}</h2>
                            </div>
                            <h2>{course.date}</h2>
                        </div>
                        <p className="ml-5 max-w-160">{course.description}</p>
                    </div>
                )
            })}
        </div>
    )
}