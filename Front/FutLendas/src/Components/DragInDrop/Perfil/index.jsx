import Foto from "../../../Assets/test.jpg";
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PhotoDragAndDrop = () => {
  const [photos, setPhotos] = useState([
    { id: 'photo1', src: `${Foto}` },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedPhotos = [...photos];
    const [reorderedPhoto] = reorderedPhotos.splice(result.source.index, 1);
    reorderedPhotos.splice(result.destination.index, 0, reorderedPhoto);
    setPhotos(reorderedPhotos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="photos">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {photos.map((photo, index) => (
              <Draggable key={photo.id} draggableId={photo.id} index={index}>
                {(provided) => (
                  <div
                  style={{ width: '200px', border: '1px solid black', height: '200px' }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img
                      src={photo.src}
                      alt="Foto Arrastável"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PhotoDragAndDrop;