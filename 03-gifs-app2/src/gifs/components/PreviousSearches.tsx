interface Props {
  prevSearches: string[];
  onLabelClicked: (search:string) => void;
}


export const PreviousSearches = ({prevSearches, onLabelClicked}:Props, ) => {
  return (
    <>
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {
                  prevSearches.map((term)=>(
                    <li key={term} onClick={() => {onLabelClicked(term)}}>{term}</li>
                  ))
                }
            </ul>
        </div>
    </>
  )
}
