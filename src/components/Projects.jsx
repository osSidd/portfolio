// import React from 'react'

function Projects({projects}) {
  return (
    <div className="my-32 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mt-12 tracking-widest">Projects</h2>
      <div className="px-8 mt-8 w-full">
        {
          projects.map((project, index) => (
            <div key={project._id} className={`my-12 p-2 cursor-pointer transition-shadow duration-500 flex items-center justify-between ${index%2===0 ? 'flex-row': 'flex-row-reverse'}`}>
              <img src={project.image.url} className="w-5/12" alt={project.title} />
              <div className="w-6/12">
                <div className="flex items-center flex-wrap gap-y-3 mb-4">
                  {
                    project?.techStack.map(tech => (
                      <div key={tech} className="bg-orange-100 tracking-widest mr-3 px-4 py-1 rounded-full">
                        {tech}
                      </div>
                    ))
                  }
                </div>
                <h2 className="text-3xl mb-4">{project.title}</h2>
                <p>{project.description}</p>
                <div className="mt-8">
                  <a className="bg-teal-500 mr-4 px-8 py-3 tracking-widest uppercase" href={project.liveurl}>View project</a>
                  <a className="bg-teal-500 mr-4 px-8 py-3 tracking-widest uppercase" href={project.githuburl}>Github</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects