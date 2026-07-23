# Component Example Reference

## Example 1

```tsx
export function DashboardMenu() {
  return <div>{/* component — no props */}</div>
}
```

## Example 2

```tsx
type TDashboardMenuProps = {
  content: JSX.Element
  optionalProps?: string
}

export function DashboardMenu(props: TDashboardMenuProps) {
  const { content, optionalProps } = props

  return <div>{content}</div>
}
```

## Example 3

```tsx
type TDashboardMenuProps = {
  content: JSX.Element
}

export function DashboardMenu(props: TDashboardMenuProps) {
  const { content } = props

  // ---- CUSTOM HOOK ----
  const { states, handlers } = useDashboard()

  return <div>{content}</div>
}
```

## Example 4

```tsx
type TDashboardMenuProps = {
  content: JSX.Element
}

export function DashboardMenu(props: TDashboardMenuProps) {
  const { content } = props

  // ---- STATES ----
  const [isOpen, setIsOpen] = useState(false)

  // ---- FUNCTIONS ----
  const handleOpen = () => {}

  // ---- HOOKS ----
  const dashboardStore = useDashboardStore()

  return <div>{content}</div>
}
```