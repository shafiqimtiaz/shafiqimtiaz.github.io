import { useState } from 'react';
import { TerminalPanel, Button } from '../../components/ui';
import { contactFormFields } from '../../data/contactForm';

export default function ContactFormSection() {
  const initialFormData = contactFormFields.reduce(
    (acc, field) => ({ ...acc, [field.name]: '' }),
    {}
  );
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData(initialFormData);
    }, 600);
  };

  return (
    <div className="h-full min-w-0">
      <TerminalPanel
        title="ssh root@614.514.183 > CONTACT_FORM"
        className="h-full shadow-[var(--shadow-soft)]"
        bodyClassName="grid h-full gap-0 p-5 text-[0.95rem] md:p-6"
      >
        <form className="space-y-10" onSubmit={handleSubmit}>
          {contactFormFields.map((field) => {
            const isTextarea = field.type === 'textarea';
            return (
              <div key={field.name} className="group/input">
                <label className="font-headline mb-2 block text-[0.75rem] text-[var(--theme-text-muted)] opacity-80">
                  <span className="text-[var(--theme-primary)]">{field.prefix}</span>{' '}
                  <span className="text-[var(--theme-text)]">{field.label}</span>
                </label>

                <div
                  className={`flex gap-2 border-b border-[var(--theme-outline-variant)] transition-colors focus-within:border-[var(--theme-primary)] ${
                    isTextarea ? 'items-start' : 'items-center'
                  }`}
                >
                  <span
                    className={`font-headline text-[var(--theme-primary)] ${isTextarea ? 'mt-2' : ''}`}
                  >
                    ❯
                  </span>

                  {isTextarea ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      rows={field.rows || 4}
                      placeholder={field.placeholder}
                      className="w-full resize-none border-none bg-transparent py-2 font-sans tracking-normal text-[var(--theme-text)] normal-case outline-none placeholder:text-[var(--theme-text-muted)] focus:ring-0 focus:outline-none"
                    />
                  ) : (
                    <input
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full border-none bg-transparent py-2 font-sans tracking-normal text-[var(--theme-text)] normal-case outline-none placeholder:text-[var(--theme-text-muted)] focus:ring-0 focus:outline-none"
                    />
                  )}
                </div>
              </div>
            );
          })}

          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              disabled={status === 'sending'}
              className="min-h-14 px-8 text-[0.76rem]"
            >
              {status === 'sending'
                ? 'IN_PROCESS...'
                : status === 'sent'
                  ? 'SEND_COMPLETE'
                  : 'EXECUTE_SEND'}
            </Button>
          </div>

          {status === 'sent' && (
            <p className="text-sm text-[var(--theme-secondary)]">
              Message sent successfully. I’ll respond in 24h or less.
            </p>
          )}
        </form>
      </TerminalPanel>
    </div>
  );
}
