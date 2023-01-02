import * as React from 'react'
import { BooksSearchProps } from '../booksInterfaces'
import './booksSearch.scss'

export default class BooksSearch extends React.Component<BooksSearchProps, {}> {
  private SearchRef: React.RefObject<HTMLDivElement>
  private InputRef: React.RefObject<HTMLInputElement>

  constructor(props: BooksSearchProps) {
    super(props)
    this.SearchRef = React.createRef<HTMLDivElement>()
    this.InputRef = React.createRef<HTMLInputElement>()
  }

  componentDidMount(): void {
    document.body.addEventListener('click', (ev: MouseEvent) => this.bodyListenerRemoveSearch(ev))
  }
  componentWillUnmount(): void {
    document.body.removeEventListener('click', (ev: MouseEvent) => this.bodyListenerRemoveSearch(ev))
  }

  inputFocus = (): void => {
    const search = this.SearchRef.current
    const input = this.InputRef.current
    search?.classList.toggle('active')
    if (search?.classList.contains('active')) {
      setTimeout(() => {
        input?.focus()
      }, 200)
    }
  }

  searchFocus = (): void => {
    const search = this.SearchRef.current
    const input = this.InputRef.current
    if (search?.classList.contains('active')) {
      setTimeout(() => {
        input?.focus()
      }, 200)
    }
  }

  searchRemove = (): void => {
    const search = this.SearchRef.current
    const input = this.InputRef.current
    if (input) input.value = ''
    input?.focus()
    search?.classList.remove('searching')

    this.props.searchBookAC("")
  }

  searchHide = (event: React.MouseEvent<HTMLDivElement>): void => {
    const search = this.SearchRef.current
    const input = this.InputRef.current
    if (search && !search.contains(event.target as Node) && input && input.value.length === 0) {
      search.classList.remove('active')
      search.classList.remove('searching')
      input.value = ''
    }

    this.props.searchBookAC("")
  }

  toggleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const search = this.SearchRef.current
    if (e.target.value.length > 0) {
      search?.classList.add(`searching`)
    } else {
      search?.classList.remove(`searching`)
    }

    this.props.searchBookAC(e.target.value)
  }

  bodyListenerRemoveSearch = (e: MouseEvent): void => {
    const search = this.SearchRef.current
    const input = this.InputRef.current
    if (search && !search.contains(e.target as Node) && input && input.value.length === 0) {
      search.classList.remove('active')
      search.classList.remove('searching')
      input.value = ''
    }
  }

  render() {
    return (
      <div className={'searchWrapper d-flex justify-content-center'}
        onClick={e => this.searchHide(e)}>
        <div className={'search'} ref={this.SearchRef}
          onClick={() => this.searchFocus()}>
          <input type="text" className={'searchInput'} value={this.props.books.inputValue}
            ref={this.InputRef} placeholder={"Provide a Book Title"}
            onChange={e => this.toggleSearch(e)}
          />
          <svg viewBox="0 0 700 100" className={'magnifyingGlass'}>
            <path
              className={'magnifyingGlassPath'}
              d="m 59.123035,59.123035 c -10.561361,10.56136 -27.684709,10.56136 -38.24607,0 -10.56136,-10.561361 -10.56136,-27.684709 0,-38.24607 10.561361,-10.56136 27.684709,-10.56136 38.24607,0 10.56136,10.561361 10.56136,27.684709 0,38.24607 l 28.876965,28.876965 c 6.304625,7.101523 5.754679,-0.187815 13.07143,-0.5 h 582.04101" />
            <path
              className={'x'}
              d="m 673.46803,25.714286 -37.17876,38.816532 c 0,0 -5.08857,5.60515 -5.68529,11.841734 -1.06622,11.143538 13.02902,11.127448 13.02902,11.127448" />
            <path
              className={'x'}
              d="m 635.08021,25.714286 37.17876,38.816532 c 0,0 5.08857,5.60515 5.68529,11.841734 1.06622,11.143538 -13.02902,11.127448 -13.02902,11.127448" />
          </svg>
          <div className={`overlay overlay1`} onClick={() => this.inputFocus()}></div>
          <div className={`overlay overlay2`} onClick={() => this.searchRemove()}></div>
        </div>
      </div>
    )
  }
}