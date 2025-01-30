registerSettingsPage(({ settings }) => (
  <Page>
    <Section
      title={
        <ColorSelect
          settingsKey="color"
          colors={[
            { color: "aqua" },
            { color: "red" },
            { color: "gold" },
            { color: "aquamarine" },
            { color: "deepskyblue" },
            { color: "plum" },
          ]}
        />
      }
    ></Section>
  </Page>
));
