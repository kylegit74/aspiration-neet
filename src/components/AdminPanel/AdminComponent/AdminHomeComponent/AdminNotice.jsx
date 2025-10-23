import { useEffect, useState } from "react";
import { Plus, Trash2, MessageSquare, Edit2, Save } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import FetchallNotice from "../../../../Services/Notice/FetchAllNotice";
import Dialog from "./AdminDialog";
import AddNotice from "../../../../Services/Notice/AddNotice";
import DeleteNotice from "../../../../Services/Notice/DeleteNotice";
import EditNotice from "../../../../Services/Notice/EditNotice";
import Spinner from "../../../Spinner";
import UpdateOrder from "../../../../Services/Notice/SetNoticeOrder";



function AdminNotice() {
  const [Notices, SetNotices] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [NewTextToAdd, SetNewTextToAdd] = useState("");
  const [isEdit, setisEdit] = useState(false);
  const [Values, setValues] = useState({});
  const [EditIndex, setEditIndex] = useState();
  const [IsLoading, setIsLoading] = useState(false);

  async function FetchNotices() {
    try {
      setIsLoading(true);
      const res = await FetchallNotice();
    {/* const sortedNotices = [...res].sort((a, b) => {
        const DateA = new Date(a.updatedAt);
        const DateB = new Date(b.updatedAt);
        
        if (DateA - DateB === 0) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return DateB - DateA;
      });
    */}
      setIsLoading(false);
      
      let initial = {};
      res.forEach((notice, index) => {
        initial[index] = notice.text;
      });
      
      setValues(initial);
      SetNotices(res);
    } catch (error) {
      console.log("Error fetching notices:", error);
      setIsLoading(false);
    }
  }
  
  async function handleAdd() {
    try {
      await AddNotice(NewTextToAdd);
      FetchNotices();
      SetNewTextToAdd("");
      setIsAddDialogOpen(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      await DeleteNotice(id);
      FetchNotices();
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleValueChange(e, index) {
    setisEdit(true);
    setValues((prev) => ({
      ...prev,
      [index]: e.target.value,
    }));
    setEditIndex(index);
  }

  async function handleSave(id, index) {
    try {
      await EditNotice(id, Values[index]);
      FetchNotices();
    } catch (error) {
      console.log('error', error);
    }
  }

   const handleDragEnd = async(result) => {
    if (!result.destination) return;

    const items = Array.from(Notices);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
     const res=await UpdateOrder(items);
     console.log('res order chalnge',res)
   
    console.log('items',items)
    FetchNotices()
    
    
    // Update the values state to match the new order
    let newValues = {};
    Notices.forEach((item, index) => {
      newValues[index] = Values[Object.keys(Values).find(key => 
        Notices[key] === item
      )];
    });
    setValues(newValues);
    console.log('notices',newValues)
  };

  useEffect(() => {
    FetchNotices();
  }, []);

  return (
    <div className="min-h-screen bg-white  p-6"> {/* Gradient background */}
      <div className="max-w-9xl mx-auto bg-white shadow-lg border p-8 rounded-2xl "> {/* White card with shadow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-black tracking-tight">Notice Management</h2> {/* Darker text */}
            <p className="text-black mt-2">Manage and publish important notices</p> {/* Slightly lighter text */}
          </div>
          <button
            onClick={() => setIsAddDialogOpen(true)}
            className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-800 px-8 py-3 rounded-xl hover:bg-yellow-500 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto font-medium" // Yellow button
          >
            <Plus className="w-5 h-5" />
            Add Notice
          </button>
        </div>

        {IsLoading ? (
          <Spinner />
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="notices">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-4"
                >
                  {Notices?.map((notice, index) => (
                    <Draggable
                      key={notice._id}
                      draggableId={notice._id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`group relative flex flex-col sm:flex-row items-start gap-4 p-6 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing ${
                            snapshot.isDragging ? "shadow-lg ring-2 ring-yellow-200 rotate-2" : "" // Highlight on drag
                          }`}
                        >
                          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center hidden sm:flex"> {/* Yellow icon background */}
                            <MessageSquare className="w-5 h-5 text-yellow-600" /> {/* Yellow icon */}
                          </div>
                          <div className="flex-1 w-full sm:w-auto">
                            <input
                              type="text"
                              value={Values[index]}
                              onChange={(e) => handleValueChange(e, index)}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 outline-none transition-all duration-200" // Yellow focus ring
                            />
                          </div>
                          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <button className="p-2 hover:bg-yellow-50 rounded-lg transition-colors"> {/* Yellow hover on save/edit */}
                              {isEdit && index === EditIndex && Values[index] !== notice.text ? (
                                <Save
                                  className="w-5 h-5 text-green-600"
                                  onClick={() => handleSave(notice._id, index)}
                                />
                              ) : (
                                <Edit2 className="w-5 h-5 text-yellow-600" />
                              )}
                            </button>
                            <button
                              className="p-2 hover:bg-red-100 rounded-lg transition-colors" // Red hover on delete
                              onClick={() => handleDelete(notice._id)}
                            >
                              <Trash2 className="w-5 h-5 text-red-500" />
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>

      <Dialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        title="Add New Notice"
      >
        <div className="space-y-6">
          <textarea
            placeholder="Enter notice text..."
            value={NewTextToAdd}
            onChange={(e) => SetNewTextToAdd(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 outline-none transition-all duration-200 resize-none" // Yellow focus
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsAddDialogOpen(false)}
              className="px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" // Yellow button
              onClick={handleAdd}
            >
              Add Notice
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default AdminNotice;