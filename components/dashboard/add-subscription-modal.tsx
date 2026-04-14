import { SUBSCRIPTION_STEPS } from "@/components/dashboard/data";
import { CloseIcon, LinkIcon, OfficeIcon, PlusIcon, SearchIcon, SparklesIcon, UploadIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export function AddSubscriptionModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal>
      <div className="modal slide-up">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>

        <div className="modal__header">
          <h2>Add New Subscription</h2>
          <p>Add a new subscription to track your recurring payments</p>
        </div>

        <div className="modal__body">
          <aside className="modal-steps">
            {SUBSCRIPTION_STEPS.map((step, index) => (
              <button type="button" key={step} className={cn(index === 0 && "is-active")}>
                <span>{step}</span>
                {index > 2 ? <small>(Optional)</small> : null}
              </button>
            ))}
          </aside>

          <section className="modal-form">
            <label className="form-field">
              <span>Quick Select</span>
              <div className="icon-input">
                <SparklesIcon />
                <Input value="Pick a popular service..." readOnly />
                <SearchIcon />
              </div>
            </label>

            <div className="modal-form__grid">
              <label className="form-field">
                <span>Service Name *</span>
                <Input defaultValue="Netflix" />
              </label>

              <label className="form-field">
                <span>Category *</span>
                <div className="select-view">
                  <span>Entertainment</span>
                  <span aria-hidden>⌄</span>
                </div>
              </label>

              <button type="button" className="round-icon" aria-label="Add category">
                <PlusIcon />
              </button>
            </div>

            <label className="form-field">
              <span>Website URL</span>
              <Input defaultValue="https://www.netflix.com" />
              <small>Official website of the service</small>
            </label>

            <div className="form-field">
              <span>Logo</span>
              <div className="logo-tabs">
                <button type="button" className="is-active">
                  <UploadIcon /> Upload
                </button>
                <button type="button">
                  <OfficeIcon /> Website
                </button>
                <button type="button">
                  <LinkIcon /> URL
                </button>
              </div>

              <div className="dropzone">
                <UploadIcon />
                <strong>Click to upload or drag and drop</strong>
                <small>PNG, JPG, SVG up to 5MB</small>
              </div>
            </div>
          </section>
        </div>

        <div className="modal__footer">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
}
