import { useState } from 'react';

export function EntryForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Eingetragen:', { amount, description });

    // Eingaben zurücksetzen
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Neue Ausgabe/Einnahme</h2>
      <input
        type="number"
        placeholder="Betrag"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Beschreibung"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
