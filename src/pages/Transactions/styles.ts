import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const ActionIcons = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme['gray-100']};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme['red-300']};
    }

    &:last-child:hover {
      color: ${(props) => props.theme['red-300']};
    }
  }
`
