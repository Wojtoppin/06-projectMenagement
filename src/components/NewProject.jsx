import { useRef } from "react";
import Input from "./Input";
export default function CustomizeProject({handleAddProject}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSaveProject= ()=> {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const entereDueDate = dueDateRef.current.value;

    handleAddProject(enteredTitle, enteredDescription, entereDueDate)


  }


  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSaveProject}>
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input type="text" ref={titleRef} label="title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dueDateRef} label="due date" />
      </div>
    </div>
  );
}
