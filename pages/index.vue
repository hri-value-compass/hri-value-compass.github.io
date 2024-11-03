<template>
  <div>
    <p>
      The HRI Value Compass is a web tool that helps researchers identify values
      and ethical concerns that arise in human-robot interactions (HRI). It was
      developed as part of a joint study by Ghent University (Belgium) and
      Politecnico di Milano (Italy). The publication of the study is currently
      under review and is available at the following link:
      <!-- TODO: fix link -->
      <a href="" target="_blank" class="underline">
        Ethical Concerns and Values in Human-Robot Interactions </a
      >. If you use the tool in your research, please cite the publication.
    </p>
    <br />
    <div
      class="flex flex-row-reverse sticky top-3 sm:top-0 z-50 pointer-events-none"
    >
      <NuxtLink
        class="btn btn-primary sm:btn-wide mt-2 pointer-events-auto"
        to="/form/context"
      >
        Use the tool
      </NuxtLink>
    </div>
    <br />
    <h2 class="text-2xl">How to use this tool</h2>
    <p>
      A paper version of the tool is available on
      <NuxtLink
        to="https://doi.org/10.5281/zenodo.14002841"
        target="_blank"
        class="underline"
        >zenodo</NuxtLink
      >.
    </p>
    <br />
    <p>
      The HRI Value Compass guides the user through a three steps process. In
      the first step, the user is invited to reflect on the context in which the
      robot will be used. In the second step, the user is guided through a
      series of questions that help identify the values that are relevant in
      that context. In the third step, the interface displays provides an
      overview of the values that were identified, useful for further reflection
      and discussion.
    </p>
    <br />
    <p>
      The tool is built on the results of a scoping review and a focus group
      with technology ethics experts. The results of this study are available by
      clicking names of each topic in the tool, providing useful links to the
      literature for further reading. You can also explore the topics and
      references in a table format.
    </p>
    <br />
    <div class="flex flex-row-reverse">
      <NuxtLink
        class="btn btn-neutral sm:btn-wide mt-2 pointer-events-auto"
        to="/table"
      >
        Explore the topics and references
      </NuxtLink>
      <!-- Add table of topics and values, check refs -->
    </div>
    <br />
    <h2 class="text-2xl">
      &OpenCurlyDoubleQuote;Ethical Concerns and Values in Human-Robot
      Interactions&CloseCurlyDoubleQuote; &ndash; Abstract
    </h2>
    <p>
      Robots, as AI with physical instantiation, inhabit our social and physical
      world, where their actions have both social and physical consequences,
      posing challenges for researchers when designing social robots. This study
      starts with a scoping review to identify potential ethical concerns
      arising from interactions with robotic systems. A focus group of
      technology ethics experts then established a comprehensive list of key
      topics and values in human-robot interaction (HRI) literature. These
      insights were integrated into the HRI Value Compass web tool, to help HRI
      researchers identify ethical values in robot design. The tool was
      evaluated in a pilot study. This work benefits the HRI community by
      highlighting key ethical concerns in human-robot interactions and
      providing an instrument to help researchers design robots that align with
      human values, ensuring future robotic systems adhere to these values in
      social applications.
    </p>
    <br />
  </div>
</template>
