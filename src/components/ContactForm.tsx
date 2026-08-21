'use client';

import { useState, type FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { asset } from '@/lib/asset';

/**
 * Formulaire de contact → public/contact.php (envoi vers
 * recrutement@pionniersdetouraine.fr, fonctionnel sur l'hébergement final).
 * Les valeurs des objets doivent rester identiques à la liste blanche PHP.
 */
const OBJETS = [
  'Partenariat / Sponsoring',
  'Question sur le club',
  'Presse / Médias',
  'Autre demande',
];

const EMAIL = 'recrutement@pionniersdetouraine.fr';

type Statut = 'idle' | 'envoi' | 'envoye' | 'repli';

export default function ContactForm() {
  const [statut, setStatut] = useState<Statut>('idle');
  const [objet, setObjet] = useState(OBJETS[0]);
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (statut === 'envoi') return;
    setStatut('envoi');
    try {
      const res = await fetch(asset('/contact.php'), {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });
      const data = res.ok ? await res.json().catch(() => null) : null;
      setStatut(data && data.ok ? 'envoye' : 'repli');
    } catch {
      setStatut('repli');
    }
  };

  const mailtoRepli = `mailto:${EMAIL}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(message)}`;

  if (statut === 'envoye') {
    return (
      <div className="ct-panel">
        <h2 className="ct-panel-title">Message envoyé</h2>
        <p className="ct-form-ok">
          Merci ! Le staff des Pionniers de Touraine vous répond dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="ct-panel">
      <h2 className="ct-panel-title">Nous écrire</h2>
      <form className="ct-form" onSubmit={onSubmit}>
        {/* Honeypot anti-spam : caché aux humains, rempli par les robots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sc-field-trap"
        />
        <div className="ct-field ct-field--full">
          <label htmlFor="contact-objet">Objet</label>
          <select
            id="contact-objet"
            name="objet"
            value={objet}
            onChange={(e) => setObjet(e.target.value)}
            required
          >
            {OBJETS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="ct-field">
          <label htmlFor="contact-nom">Nom</label>
          <input id="contact-nom" name="nom" required placeholder="Votre nom" />
        </div>
        <div className="ct-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required placeholder="prenom@email.com" />
        </div>
        <div className="ct-field ct-field--full">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Votre demande, en quelques lignes…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="ct-form-actions">
          <button type="submit" className="sc-btn" disabled={statut === 'envoi'}>
            {statut === 'envoi' ? 'Envoi…' : 'Envoyer'} <FaPaperPlane size={13} />
          </button>
          {statut === 'repli' && (
            <p className="ct-form-repli">
              L&apos;envoi direct sera actif sur le site final. En attendant :{' '}
              <a href={mailtoRepli}>nous écrire par email</a>.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
