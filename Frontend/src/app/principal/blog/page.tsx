import axios from "axios";
import { parsedEnv } from "../../../../parseEnv";

interface Blog {
  data: [
    {
      attributes: {
        Title: string;
        publication: string;
        Text: string;
      }
    }
  ];
}

export default async function Home() {
  const response = await axios.get<Blog>(`${parsedEnv.NEXT_STRAPI_URL}/blogs`, {
    headers: {
      Authorization: "Bearer " + parsedEnv.NEXT_STRAPI_TOKEN,
    },
  });


  return (
    <main>
      <article> 
      {response.data.data.map((blog, index) => (
        <div key={index} className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-md mx-auto bg-purple-700 rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">{blog.attributes.Title}</div>
              <p className="text-gray-200 text-base">{blog.attributes.Text}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center bg-purple-900">
              <div className="font-bold text-xl">Pedro Urrutia</div>
              <div className="text-sm">Fecha: {blog.attributes.publication}</div>
            </div>
          </div>
        </div>
      ))}

</article> 
    </main>
  );
}