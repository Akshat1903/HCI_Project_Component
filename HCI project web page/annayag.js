if (annyang) {
  // Let's define a command.
  const commands = {
    'about us': () => { document.getElementById('about-us').click() },
    'synthesiser': () => { document.getElementById('synthesiser').click() },
    'library': () => { document.getElementById('library').click() },
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start({ autoRestart: false });
}
