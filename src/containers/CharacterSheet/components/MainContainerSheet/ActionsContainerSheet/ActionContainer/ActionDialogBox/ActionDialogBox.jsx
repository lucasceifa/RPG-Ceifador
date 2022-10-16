import './ActionDialogBox.css'
import * as Dialog from '@radix-ui/react-dialog';

function ActionDialogBox() {
	return ( 
		<Dialog.Root>
			<Dialog.Trigger className="triggerMain">
				<button className='buttonTrigger'>
					MANAGE CUSTOM
				</button>
			</Dialog.Trigger>
			<Dialog.Overlay className='overlay' />
			<Dialog.Content className="dialogContent">
				<Dialog.Title className="dialogTitle">
					Adicione uma ação nova
					<Dialog.Close className='closeXButton'>
						<button className='buttonCloseDialogX'>X</button>
					</Dialog.Close>
				</Dialog.Title>
        <Dialog.Description className="dialogDescription">Coloque os dados principais como dado de dano, tipo de arma e quais modificadores ela usa</Dialog.Description>
				<Dialog.Close className="closeDialog">
					<button className='buttonCloseDialog'>
						SAVE CHANGES
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Root>
	 );
}

export default ActionDialogBox;