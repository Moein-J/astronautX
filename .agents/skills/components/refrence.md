# Component Template Reference

## Base Template — Client or Server

### Shared or Feature component skeleton

```tsx

{{clientDirective}}

{{imports}}

{{propsInterface}}

export function {{ComponentName}}(props{{propsType}}) {
  {{propsDestructure}}

  return (
    <div className="">
      {/* Implement component */}
    </div>
  );
}
```

| Token                  | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `{{clientDirective}}`  | `use client` or empty for server side (based on context) |
| `{{imports}}`          | imported files                                           |
| `{{ComponentName}}`    | Component file name in PascalCase                        |
| `{{propsInterface}}`   | Props interface definition block (if exists)             |
| `{{propsType}}`        | `: T{ComponentName}Props` if props exist, else ``        |
| `{{propsDestructure}}` | e.g., `const { renderContent } = props`                  |