import Image from "next/image"
import { useEffect, useState } from 'react';
import { commentaries } from "@/app/comments/data";

export default function Example() {

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<{ name: string; body: string }>({ name: '', body: '' });
  const [searchId, setSearchId] = useState<number | null>(null);
  const [searchedComment, setSearchedComment] = useState<Comment | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        const lastSixComments = data.sort((a: Comment, b: Comment) => b.id - a.id).slice(0, 6);
        setComments(lastSixComments);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${searchId}`);
      const data = await response.json();
      setSearchedComment(data);
    }
  };

  return (
    <div className="bg-slate-400 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <Image            
            className=" "
            src="/rrlogo.png"
            alt="Your Company"
            width= {200}
            height={200}
          />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Restaurant & Reviews</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            The new way to look after your next dinner destiny.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {commentaries.map((commentaries) => (
            <article key={commentaries.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">
                  {commentaries.date}
                </time>
                <button className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Review
                </button>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Customer Review #{commentaries.id}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{commentaries.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image src={commentaries.authorImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">                    
                      <span className="absolute inset-0" />
                      {commentaries.authorName}                    
                  </p>
                  <p className="text-gray-600">{commentaries.authorRole}</p>
                </div>
              </div>
            </article>
          ))}
        </div>        
      </div>

      
      <div className="bg-white py-24 sm:py-32 m-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative places to eat
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
      

    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image className="mx-auto h-12" 
        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" 
        width={300} 
        height={300}  
        alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>              
              “As a CEO with high standards, I am delighted to share my recent experience at Restaurant & Reviews . From the elegant ambiance to the exquisite cuisine, every aspect exceeded expectations. The attentive service and culinary mastery make it a must-visit for any discerning diner. Bravo to the team at Restaurant & Reviews for a truly memorable dining experience.”
            </p>
          </blockquote>
          <figcaption className="mt-10 ">            
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">        
        <figure className="mt-20">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>              
              “I must express my admiration for Restaurant & Review Page. This platform exemplifies excellence in curating and sharing culinary experiences. The user-friendly interface, comprehensive reviews, and vibrant community make it an indispensable resource for food enthusiasts worldwide. Kudos to the team behind Restaurant & Review for their dedication to celebrating exceptional dining experiences.”
            </p>
          </blockquote>
          <figcaption className="mt-10">            
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Kenny McCormick</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of McCormick´s</div>
            </div>
          </figcaption>
        </figure>

{/* ACA PUEDO AGREGAR EL FORMULARIO */}
          <div className="py-24 sm:py-32 m-5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                Do you want to be a part of our WALL OF FAME?
              </h2>
              <p className="text-center text-gray-600">Leave us your review</p>
              

              






















              {/* <form className="mt-5 mx-auto">
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your membership</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>---</option>
                  <option>Guess</option>
                  <option>New Customer / CTO</option>
                  <option>Customer / Gold</option>
                  <option>Customer / CDT</option>
                  
                </select>
              </form>
              
              <form className="mt-5 mx-auto">                
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <textarea id="message" rows="1" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe..."></textarea>
              </form>

              <form className="mt-5 mx-auto">                
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your review</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5">Submit</button>
              </form> */}
              
              






              </div>
          </div>  
      
      </div>
    </section>  
    </div>
    </div>    
  )
}








