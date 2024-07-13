import { useMutation, useQueryClient } from '@tanstack/react-query';
import './deleteConfirmation.css';
import { FC, useState } from "react"
import { Button, Modal, Spinner } from "react-bootstrap"
import { useLexicon } from '@/context/lexicon';
import { Link } from '@/models/Link';

type DeleteConfirmationProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  link: Link;
  unSetLink: () => void;
};

export const DeleteConfirmation: FC<DeleteConfirmationProps> = ({ show, setShow, link, unSetLink}) => {
  const queryClient = useQueryClient();
  const { deleteLink } = useLexicon();
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutation = useMutation({
    mutationFn: deleteLink,
    onMutate: () => {
      setIsPending(true)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
      setIsPending(false)
      setShow(false);
      unSetLink();
    },
    onError: (error) => {
      setIsError(true)
    }
  })

  
  const handleDelete = () => {
    mutation.mutate(link.id);
  };

  const handleClose = () => {
    setShow(false);
    unSetLink();
  };
  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      data-bs-theme="dark"
      className="delete-confirmation"
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you would like to delete this link?
        </p>
        { isError &&
          <p className="error-message">
            An error occurred. Please try again.
          </p>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}>
          Close
        </Button>
        {isPending && (
          <Button variant="outline-danger" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Deleting...
          </Button>
        )}
        {!isPending && (
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete Link
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}