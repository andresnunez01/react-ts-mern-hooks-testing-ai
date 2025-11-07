

import {describe, expect, test} from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomHeader } from './CustomHeader';

describe('GifsApp', ()=>{

  const title:string = 'CustomHeader Tests';
  const description:string = 'Esta es la descripcion del custom header';


  test('should render the title correctly', () => {
    render(<CustomHeader title={title}/>);

    const header = screen.getByRole('heading');

    expect(header.innerHTML).toContain(title);

  });
  

  test('should render the description when is provided', () => {
    
    render(<CustomHeader title={title} description={description}/>);


    const descriptionParagraph = screen.getByRole('paragraph');

    expect(descriptionParagraph.innerHTML).toContain(description); 
  });


  test('should not render the description when not provided', () => {
    const { container } = render(<CustomHeader title={title}/>);

    const divElement = container.querySelector('.content-center');

    expect(divElement?.querySelector('p')).toBeNull();
  });
})