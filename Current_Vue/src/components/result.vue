<template>

</template>

<script>
export default {
  data: () => ({
    lblStt: 'Stt',
    lblName: 'Name',
    lblPass: 'PASS( Tools: Show / Hide )'
  })
}
</script>

<style lang="scss">
  .secction-result {
    width: 400px;
    margin: auto;
    margin-top: 15px;

    .result-table {
      display: table;
      width: 100%;

      .result-row {
        display: table-row;

        .result-cell {
          display: table-cell;
        }
      }
    }
  }
</style>
