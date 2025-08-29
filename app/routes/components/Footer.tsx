export default function Footer({title}){
  return (
  <>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 text-center dark:text-gray-400 my-6 my-8">{title}</span>
  </>
  );
}