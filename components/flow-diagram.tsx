interface Step {
  label: string
}

interface FlowDiagramProps {
  steps: Step[]
}

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">
            {step.label}
          </div>
          {i < steps.length - 1 && (
            <span className="text-muted-foreground text-xs">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
