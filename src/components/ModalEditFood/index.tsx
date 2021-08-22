
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FoodType } from '../../types';


interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (editingFood: FoodType) => void;
  editingFood?: FoodType;
  isOpen: boolean;
}

export default function ModalEditFood({ setIsOpen, handleUpdateFood, isOpen, editingFood }: ModalEditFoodProps) {

  const formRef = useRef<FormHandles>();

  async function handleSubmit(food: FoodType) {
    handleUpdateFood(food);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={() => formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}