import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionTitle = ({className, children}) => {
    const { toggleItem } = useAccordionContext();
    const id = useAccordionItemContext();
    
    return (<>
        <h3 onClick={() => toggleItem(id)} className={className}>{children}</h3>
    </>);
}

export default AccordionTitle;