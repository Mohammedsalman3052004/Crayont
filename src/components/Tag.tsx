export default function Tag({name}: {name: string}) {
    return (
        <h5 className="inline-flex border uppercase border-lime-400 text-lime-400 gap-2 rounded-full px-3 py-1 items-center">
            &#10038;  {name}
        </h5>
    );
}