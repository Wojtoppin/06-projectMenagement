import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function CustomizeProject({
  handleAddProject,
  handleCancelProject,
}) {

  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSaveProject = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const entereDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() == "" ||
      enteredDescription.trim() == "" ||
      entereDueDate.trim() == ""
    ) {
      modalRef.current.open();

    } else {
      handleAddProject(enteredTitle, enteredDescription, entereDueDate);
    }
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancelProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSaveProject}
            >
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
    </>
  );
}
