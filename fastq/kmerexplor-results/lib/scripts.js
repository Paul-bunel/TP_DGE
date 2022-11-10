// These 3 lines aim to refresh chart when the "chart_content" div is resized
var myChart = echarts.init(document.getElementById("chart_content"),);
window.addEventListener("resize", function(event){myChart.resize();});
function resizeChart() {myChart.resize()}

// Manage sliding sidenav
function hideElement() {var x = document.getElementById("Sidenav"); var hideIcon = document.getElementById("hide-icon");if (x.style.width === "0px") {x.style.width = "250px";document.getElementById("main").style.marginLeft = "250px";hideIcon.innerHTML = "&#9664";} else {x.style.width = "0";document.getElementById("main").style.marginLeft= "0";hideIcon.innerHTML = "&#9654";};setTimeout(resizeChart, 500);}

// Samples array variable
var samples = ['Samples', 'ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer', 'ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer', 'ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer', 'ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer', 'ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer', 'ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer'];
var samples_orientation = ['Samples', 'ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1', 'ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2', 'ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1', 'ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2', 'ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1', 'ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2', 'ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1', 'ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2', 'ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1', 'ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2', 'ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1', 'ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2'];

// metadata and dataset to build graph
var _Histones = {
    chart_type: 'bar',
    theme: 'light',
    threshold: [{yAxis:200,}],
    yAxis_max: 200,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Poly A and Ribo depletion by Histone detection",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '28%',
    nb_seqId: 32,
    dataset: [
                [],
                ['HIST1H1A', 0.0, 0.0, 0.0, 0.138, 0.0, 0.0],
                ['HIST1H1B', 0.5949, 0.5171, 0.1757, 0.5131, 0.3555, 0.2377],
                ['HIST1H1D', 1.699, 0.8389, 0.5952, 0.8581, 1.669, 0.78],
                ['HIST1H1E', 1.265, 0.3072, 0.9552, 0.5815, 1.986, 1.37],
                ['HIST1H1T', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['HIST1H2AB', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['HIST1H2AG', 0.5952, 0.654, 2.794, 1.779, 0.4778, 1.295],
                ['HIST1H2AH', 0.0, 0.5251, 1.3, 0.0, 0.0, 0.0],
                ['HIST1H2BA', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['HIST1H2BB', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['HIST1H2BE', 0.8962, 0.1398, 0.7156, 0.7258, 0.07749, 0.5537],
                ['HIST1H2BF', 1.186, 2.301, 2.27, 2.786, 1.588, 1.491],
                ['HIST1H2BH', 0.4364, 1.062, 1.766, 1.026, 0.7062, 1.163],
                ['HIST1H2BL', 0.0, 0.0, 0.7909, 0.5039, 0.0, 0.5435],
                ['HIST1H2BM', 0.0, 0.0, 0.03792, 1.473, 1.239, 0.0],
                ['HIST1H2BN', 0.3356, 0.1908, 0.5541, 0.5656, 0.313, 0.3115],
                ['HIST1H3A', 0.4357, 0.0, 0.4494, 0.0, 0.4005, 0.0],
                ['HIST1H3B', 0.0, 1.462, 0.2446, 0.3249, 0.0, 0.0],
                ['HIST1H3C', 0.0, 0.0, 0.0, 0.0, 0.4335, 0.4314],
                ['HIST1H3E', 1.189, 1.429, 1.792, 2.459, 2.156, 3.293],
                ['HIST1H3F', 0.0, 0.0, 0.2984, 0.1699, 1.111, 0.0],
                ['HIST1H3G', 0.7739, 0.5907, 0.7558, 0.8186, 0.5145, 0.726],
                ['HIST1H3H', 2.275, 0.8948, 4.57, 4.148, 1.687, 1.375],
                ['HIST1H3I', 0.0, 0.0, 0.0, 0.0, 0.0, 0.009221],
                ['HIST1H4B', 0.08818, 0.3972, 0.0, 0.3919, 0.0, 0.0],
                ['HIST1H4C', 0.0, 0.272, 0.5073, 0.393, 1.373, 0.0],
                ['HIST1H4D', 0.0, 0.0, 0.0, 0.0, 0.0, 0.8375],
                ['HIST1H4F', 0.7679, 0.0, 0.5397, 0.7459, 0.0, 0.0],
                ['HIST1H4I', 0.2138, 1.409, 2.839, 3.03, 1.588, 1.155],
                ['HIST1H4J', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['HIST2H2AB', 0.0, 0.0153, 0.0, 0.0, 0.0, 0.09492],
                ['HIST2H2AC', 0.1081, 0.2338, 0.0, 0.0, 0.4, 1.194],
    ],
    desc: [
        "Poly A selection",
        "<strong>Predictor genes selection:</strong> when total RNA is extracted from a human sample, the most abundant component is ribosomal RNA (rRNA, 80 to 90%, <em>O'Neil et al. (2013)</em>), which must be removed to measure gene/transcript abundances using RNA-seq technology. Commonly used protocols to remove rRNA are polyadenylated mRNA selection (polyA+) and ribo-depletion (Ribo-Zero). To differentiate these 2 protocols, we selected widely expressed histone genes which produce non-polyadenylated transcripts barely detected into polyA+ RNA-seq. These predictor genes are listed in the legend.",
        "<strong>Specific k-mers quantification:</strong> several specific k-mers designed with Kmerator are associated to each selected histone gene. KmerExploR uses countTags to compute k-mer occurrences number in each RNA-seq sample and calculates the mean count value for each gene (Y axis, mean k-mer counts normalized per billion of k-mers).",
        "<strong>Threshold :</strong> the threshold was defined based on several RNA-seq datasets but might not fit perfectly your data. Ribo-depleted samples should be above the threshold and polyA+ below."
    ]
};


// metadata and dataset to build graph
var _Orientation = {
    chart_type: 'bar',
    theme: 'light',
    threshold: false,
    yAxis_max: null,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Orientation",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '16%',
    nb_seqId: 20,
    dataset: [
                ['C1orf43', 0.0, 43.1, 0.0, 75.35, 0.102, 54.07, 0.1016, 53.13, 0.0, 64.57, 0.0, 74.36],
                ['C1orf43', -45.6, -0.0, -78.68, -0.0, -58.05, -0.102, -56.55, -0.1016, -70.21, -0.0, -79.78, -0.0],
                ['CHMP2A', 0.0, 39.09, 0.1919, 35.66, 0.0, 28.19, 0.1486, 26.3, 1.329, 50.95, 0.0, 51.59],
                ['CHMP2A', -48.29, -0.0, -48.05, -0.1919, -35.37, -0.0, -33.01, -0.1486, -67.27, -1.619, -64.05, -0.0],
                ['EMC7', 0.0, 15.31, 0.0, 23.23, 0.0, 12.51, 0.0, 13.72, 0.2713, 22.01, 0.0, 20.37],
                ['EMC7', -16.87, -0.0, -24.27, -0.0, -12.88, -0.0, -14.74, -0.0, -23.32, -0.0, -22.82, -0.0],
                ['GPI', 0.07909, 40.74, 0.0, 61.08, 0.06253, 73.74, 0.06229, 70.37, 0.2229, 44.18, 0.1553, 43.56],
                ['GPI', -44.52, -0.1213, -67.06, -0.0, -82.86, -0.06253, -78.77, -0.06783, -49.78, -0.2204, -47.52, -0.1454],
                ['PSMB2', 0.0, 21.57, 0.0, 28.34, 0.0, 21.96, 0.0, 22.77, 0.2593, 19.53, 0.0, 22.85],
                ['PSMB2', -21.17, -0.09199, -28.17, -0.0, -22.6, -0.0, -22.81, -0.0, -19.43, -0.2593, -23.71, -0.0],
                ['PSMB4', 0.0, 33.4, 0.0, 73.01, 0.1833, 53.58, 0.1623, 58.69, 0.6535, 56.16, 0.3252, 67.94],
                ['PSMB4', -35.77, -0.0, -76.8, -0.0, -53.85, -0.1833, -59.05, -0.0, -64.01, -0.6535, -72.27, -0.3252],
                ['RAB7A', 0.0, 44.64, 0.0, 55.14, 0.07775, 35.98, 0.1549, 35.68, 0.2772, 55.13, 0.1379, 47.31],
                ['RAB7A', -46.3, -0.0, -59.13, -0.0, -37.57, -0.07775, -36.94, -0.1102, -59.44, -0.4034, -50.87, -0.1379],
                ['REEP5', 0.0, 17.36, 0.0, 13.73, 0.1571, 16.97, 0.1565, 19.33, 0.1867, 21.71, 0.09291, 19.77],
                ['REEP5', -18.54, -0.0, -14.7, -0.0, -17.56, -0.1548, -19.82, -0.1136, -23.84, -0.0892, -20.48, -0.09291],
                ['SNRPD3', 0.251, 32.26, 0.2837, 29.24, 0.441, 33.26, 0.1904, 29.9, 0.5327, 33.05, 1.369, 31.44],
                ['SNRPD3', -32.06, -0.3161, -29.92, -0.4255, -32.74, -0.6615, -27.92, -0.2782, -31.68, -0.5677, -29.95, -1.517],
                ['VPS29', 0.0, 25.99, 0.0, 27.81, 0.0, 18.82, 0.0, 17.68, 0.2315, 28.86, 0.0, 30.85],
                ['VPS29', -27.55, -0.0, -32.6, -0.13, -21.43, -0.0, -20.32, -0.07477, -34.47, -0.2315, -36.94, -0.0],
    ],
    desc: [
        "Orientation",
        "<strong>Predictor genes selection:</strong> paired-end RNA-seq protocol generates 2 fastq files per sample. To determine the orientation of these files (stranded/unstranded) we selected a subset of housekeeping genes from the list previously published by Eisenberg and Levanon (<em>Eisenberg et al. (2013)</em>). These predictor genes are listed in the legend.",
        "<strong>Specific k-mers quantification and interpretation:</strong> for each predictor gene, we designed specific k-mers with Kmerator and also computed these k-mers reverse-complements. With KmerExploR, forward specific k-mers are counted as positive (Y axis, mean k-mer counts normalized per billion of k-mers), and their reverse-complements are counted as negative. For each predictor gene and both forward and reverse counts, the mean value is calculated. When the samples are stranded, forward and reverse k-mers are expected to be respectively in 2 different fastq files. If  forward and reverse k-mers are equally found in each fastq file (balanced positive and negative counts) the sample is considered as unstranded."
    ]
};


// metadata and dataset to build graph
var _Gender = {
    chart_type: 'bar',
    theme: 'light',
    threshold: [{yAxis:5,}],
    yAxis_max: null,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Y chromosome detection",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '17%',
    nb_seqId: 7,
    dataset: [
                [],
                ['DDX3Y', 0.0005913, 0.06376, 9.519, 10.05, 6.972, 6.891],
                ['EIF1AY', 0.0, 0.0, 21.1, 19.2, 13.96, 15.88],
                ['NLGN4Y', 0.0, 0.0, 0.0, 0.0, 0.2259, 0.1118],
                ['RPS4Y1', 0.0, 0.006297, 68.2, 73.11, 79.93, 82.57],
                ['TBL1Y', 0.0, 0.0, 0.0, 0.0, 0.1184, 0.0],
                ['TMSB4Y', 0.0, 0.0, 2.314, 1.536, 2.73, 3.997],
                ['UTY', 0.0, 0.0007787, 5.462, 5.065, 4.196, 3.234],
    ],
    desc: [
        "Gender",
        "<strong>Predictor genes selection:</strong> to determine the gender, we selected previously published chromosome Y specific genes (<em>A. A. Maan et al. (2017)</em>) that have an ubiquitous expression. These predictor genes are listed in the legend.",
        "<strong>Specific k-mers quantification and interpretation:</strong> several specific k-mers designed with Kmerator are associated to each selected chromosome Y gene. KmerExploR uses countTags to compute k-mer occurrences number in each RNA-seq sample and calculates the mean count value for each gene (Y axis, mean k-mer counts normalized per billion of k-mers). Females should have an almost zero expression for all selected genes contrary to males that should express them all."
    ]
};


// metadata and dataset to build graph
var _Read_biases = {
    chart_type: 'bar',
    theme: 'light',
    threshold: false,
    yAxis_max: 100,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Read position biases",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '15%',
    nb_seqId: 3,
    dataset: [
                ['3"UTR', 20.46, 14.37, 16.28, 16.91, 18.02, 17.75],
                ['CDS', 38.29, 38.63, 37.48, 36.26, 37.7, 37.38],
                ['5"UTR', 41.25, 47.0, 46.24, 46.82, 44.29, 44.86],
    ],
    desc: [
        "Read position biases",
        "<strong>Predictor genes selection:</strong> read coverage bias from 5' to 3' end can be one important parameter to analyse. Indeed, if reads primarily accumulate at the 3’ end of transcripts in poly(A)-selected samples, this might also indicate low RNA quality in the starting material (<em>Conesa et al. (2016)</em>). During mapping process, tools for quality control are used including Picard, RSeQC and Qualimap. Here, to check the uniformity of read coverage, we selected a subset of housekeeping genes from the list previously published by Eisenberg and Levanon (<em>Eisenberg et al. (2013)</em>) : VPS29, SNRPD3, REEP5, RAB7A, PSMB4, PSMB2, GPI, EMC7, CHMP2A and C1orf43.",
        "<strong>Specific k-mers quantification and interpretation:</strong> for each predictor gene, we designed specific k-mers with Kmerator and distinguished the mean k-mer counts from 5', 3' and CDS regions. Results are presented, for each sample, with the cumulative mean of each region (all predictor gene mean counts are grouped together by region), reported as a percentage (Y axis). In absence of bias, one can expect a conserved proportion of the corresponding region among samples. Conversely, if a bias is present in the data this proportion will be lost."
    ]
};


// metadata and dataset to build graph
var _HeLa_HPV18 = {
    chart_type: 'bar',
    theme: 'light',
    threshold: [{yAxis:10,}],
    yAxis_max: 10,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Hela HPV18",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '22%',
    nb_seqId: 19,
    dataset: [
                [],
                ['E1_mut1012', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E1_mut1353', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E1_mut1807', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E1_mut1843', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E1_mut1994', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E1_mut2269', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E6_mut104', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E6_mut287', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E6_mut485', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E6_mut549', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E7_mut751', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['E7_mut806', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut5875', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut6401', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut6460', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut6625', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut6842', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut7258', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['L1_mut7486', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ],
    desc: [
        "Hela contamination",
        "<strong>Predictor genes selection:</strong> HeLa is the first immortal human cell line, coming from Henrietta Lacks cancerous tissue samples. Her cancer was triggered by an infection with human papillomavirus type 18 (HPV-18). Nowadays, this cell line is largely used in medical research and HeLa contaminations in other cell types have been observed (<em>Selitsky et al. (2020)</em>). 3 segments of HPV-18 are integrated into HeLa genome on chromosome 8 and include the long control region (LCR), the E6, E7 and E1 genes, and partial coding regions for the E2 and L1 genes (<em>Cantalupo et al. (2015)</em>). From these genes expressed in HeLa cells with specific mutations (<em>Cantalupo et al. (2015)</em>), we selected 60 nt long sequences around each mutation. These predictor gene specific mutations are listed in the legend.",
        "<strong>Specific k-mers quantification and interpretation:</strong> for each selected HeLa specific mutation 60 nt sequence, we designed specific k-mers with Kmerator. Next, KmerExploR uses countTags to compute k-mer occurrences number in each RNA-seq sample and calculates the mean count value for each selected HeLa specific mutation (Y axis, mean k-mer counts normalized per billion of k-mers). Using this quantification, we are able to highlight potential HeLa contamination."
    ]
};


// metadata and dataset to build graph
var _Mycoplasma = {
    chart_type: 'bar',
    theme: 'light',
    threshold: [{yAxis:20,}],
    yAxis_max: 20,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Mycoplasma",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '16%',
    nb_seqId: 6,
    dataset: [
                [],
                ['Acholeplasma_laidlawii', 0.01065, 0.01003, 0.004054, 0.01149, 0.02168, 0.008299],
                ['Mycoplasma_arginini', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Mycoplasma_fermentans', 0.0, 0.002517, 0.0, 0.0, 0.006103, 0.0],
                ['Mycoplasma_hominis', 0.0, 0.0, 0.006439, 0.002138, 0.0, 0.0],
                ['Mycoplasma_hyorhinis', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Mycoplasma_orale', 0.0, 0.0, 0.007198, 0.0, 0.0, 0.0],
    ],
    desc: [
        "Mycoplasma contamination",
        "<strong>Predictor genes selection:</strong> mycoplasma is a common source of cell culture sample contamination and can affect  gene expression. To control  its presence in RNA-seq data, we checked for the most frequent mycoplasma found in cell contamination, according to <em>Drexler et al. (2002)</em>.  For each of the 6 selected mycoplasma species (A. laidlawii, M. fermentans, M. hominis, M. hyorhinis, M. orale and M. arginini; also listed in the legend), we downloaded the 16S ribosomal RNA sequences. Indeed, according to the literature, 90% of the specific mycoplasma-mapped reads from human RNA-seq samples mapped to mycoplasma ribosomal RNA (<em>Olarerin-George et al. (2015)</em>).",
        "<strong>Specific k-mers quantification:</strong> specific k-mers were designed for each of 6 mycoplasma species’ rRNA sequences using Kmerator. Next, KmerExploR uses countTags to compute k-mer occurrences number in each RNA-seq sample and calculates the mean count value for each mycoplasma specie (Y axis, mean k-mer counts normalized per billion of k-mers).",
        "<strong>Threshold:</strong> the threshold is an indication: above it, we could consider the sample as contaminated by mycoplasms. "
    ]
};


// metadata and dataset to build graph
var _Virus_genome = {
    chart_type: 'bar',
    theme: 'light',
    threshold: [{yAxis:1,}],
    yAxis_max: 1,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Virus detection",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '20%',
    nb_seqId: 14,
    dataset: [
                [],
                ['Bovine_viral_diarrhea_virus', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Hepatitis_B_virus_strain', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Hepatitis_C_virus_genotype', 0.002016, 0.003333, 0.0007971, 0.00139, 0.0007104, 0.003182],
                ['Human_T_lymphotropic_virus_1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_T_lymphotropic_virus_2', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_gammaherpesvirus_4', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_herpesvirus_4', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_herpesvirus_8', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_immunodeficiency_virus_1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_immunodeficiency_virus_2', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Human_papillomavirus_type_92', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['MuLV_related_virus_22Rv1slashCWR', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Murine_leukemia_virus', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Squirrel_monkey_retrovirus', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ],
    desc: [
        "Viruses contamination",
        "<strong>Predictor genes selection:</strong> viruses are a significant cause of human cancers. In a recent study, <em>Uphoff et al. (2019)</em> screened more than 300 Cancer Cell Line Encyclopedia RNA-seq and revealed 20 infected cell lines with different viruses. To rapidly explore the potential presence of viruses into RNA-seq datasets, we used the 14 viruses reference genomes described in <em>Uphoff et al.</em> Study. These viruses are listed in the legend.",
        "<strong>Specific k-mers quantification and interpretation:</strong> we used Kmerator to select, for each virus, the k-mers absent from the human reference genome and transcriptome. Next, KmerExploR uses countTags to compute k-mer occurrences number in each RNA-seq sample and calculates the mean count value for each virus (Y axis, mean k-mer counts normalized per billion of k-mers). Using this quantification, we are able to highlight potential common viruses contamination."
    ]
};


// metadata and dataset to build graph
var _Specie = {
    chart_type: 'bar',
    theme: 'light',
    threshold: false,
    yAxis_max: 100,
    toolbox_type: ['stack', 'tiled'],
    title_text: "Ensembl species",
    legend_padding_top: [40, 30, 0, 30],
    grid_top: '19%',
    nb_seqId: 11,
    dataset: [
                ['Homo_sapiens_MT_CO1', 99.67, 99.65, 99.67, 99.68, 99.65, 99.65],
                ['Caenorabditis_elegans_ctc_3_MTCE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Caenorabditis_elegans_ctc', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Drosophila_melanogaster_mt_CoI', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Rattus_norvegicus_Mt_co1', 0.33, 0.35, 0.33, 0.32, 0.35, 0.35],
                ['arabidopsis_thaliana_COX1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Zea_mays_COX1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Gallus_gallus_MT_CO1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Mus_musculus_mt_Co1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Danio_rerio_mt_co1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                ['Saccharomyces_cerevisiae_COX1', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ],
    desc: [
        "Species",
        "<strong>Predictor genes selection:</strong> the probability of mixed cell lines in samples preparation, usage of polymerase chain reaction (PCR) which can accidentally amplify the wrong piece of DNA, plus an unknown probability of error in metadata assignation motivated us to check the species present in an RNA-seq sample. Based on several studies, the mitochondrially encoded cytochrome c oxidase I (MT-CO1) is a gene marker that could be sufficient for a quick check of the specie of an RNA-seq sample (<em>Hebert et al. (2003)</em>). Indeed, this gene is highly expressed and reference sequences from many distinct species are available. Thus, we selected the MT-CO1 gene from 10 different species. These species are listed in the legend.",
        "<strong>Specific k-mers quantification:</strong> with Kmerator, we designed specific k-mers for each MT-CO1 ortholog, using the appropriate specie reference genome and transcriptome. Next, KmerExploR uses countTags to compute k-mer occurrences number in each RNA-seq sample and calculates the mean count value for each specie (Y axis, mean k-mer counts normalized per billion of k-mers). "
    ]
};

// Define serie for chartjs() function
function set_series(category) {
    if (typeof category.stack == 'undefined') {
        category.stack = 'one';
    };
    /* Build series Object for chartjs() */
    series = [];
    if (category.threshold) {
        series.push({type: 'line', seriesLayoutBy: 'row', markLine: {symbol: 'none', label: {show: true,formatter: 'Threshold'},lineStyle: {width: 2, opacity: 0.6}, data: category.threshold}});
    };
    for (i=0, c=category.nb_seqId; i<c; i++) {
        series.push({type: category.chart_type, stack: category.stack, seriesLayoutBy: 'row'});
    }
    return series
}

// chartjs() draw chart using values from one category and set_series() function
function chartjs(category) {
    // clear home content
    home_html = document.getElementById('home_content');
    home_html.innerHTML = '';
    // weight of chart content
    chart_html = document.getElementById('chart_content');
    chart_html.style.height = '600px';
    // set series (same object * categories count)
    series = set_series(category);
    // dataset = samples + dataset
    if (category.dataset[0][0] != 'Samples') {
        if (category.title_text == 'Orientation') {
            category.dataset.unshift(samples_orientation);
        } else {
            category.dataset.unshift(samples);
        };
    };
    // clear charts
    echarts.dispose(document.getElementById('chart_content'));
    // init chart
    myChart = echarts.init(
        document.getElementById('chart_content'),
        category.theme,
    );
    // specify chart configuration item and data
    var option = {
        dataset: {
            source: category.dataset
        },
        title: {text: category.title_text},
        toolbox: {
            feature: {
                magicType: {type: category.toolbox_type},
                dataZoom: {yAxisIndex: false},
                saveAsImage: {pixelRatio: 2}
            }
        },
        tooltip: {},
        emphasis: {focus: 'series'},
        legend: {
          padding: [40, 30, 0, 30],
          selector: true,
        },
        dataZoom: [{
                type: 'inside',
            }],
        grid: {
            top: category.grid_top
        },
        xAxis: {type: 'category'},
        yAxis: {max: category.yAxis_max},
        series: series,
    };
    myChart.setOption(option);

    // Add Description;
    description(category);
};

// Set the description of the category in "desc_content" div id
function description(category) {
    var desc = category.desc;
    desc_html = document.getElementById("desc_content");
    desc_html.innerHTML = "";
    for (i=0; i<desc.length; i++) {
        if (i==0) {
            desc_html.innerHTML += "<h2>" + desc[i] + "</h2>";
        } else {
            desc_html.innerHTML += "<p>" + desc[i] + "</p>";
        }
    }
}

// Home page
function home() {
    // clear home content
    home_html = document.getElementById('home_content');
    home_html.innerHTML = '';
    // clear charts
    chart_html = document.getElementById('chart_content');
    chart_html.innerHTML = '';
    chart_html.style.height = 0;
    // clear chart description
    desc_html = document.getElementById('desc_content');
    desc_html.innerHTML = '';
    // content of Home page
    home_html.innerHTML += "<p>Mode: paired</p><p>KmerExploR version: 0.6.3</p><details><p><summary>6 samples analysed</summary></p><p>ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer - ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer - ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer - ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer - ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer - ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer</p></details>";
    home_html.innerHTML += "<details><p><summary>About fastq files</summary></p><table id='fastq-info'><tbody><tr><th>Fastq file</th><th>number of kmers</th><th>number of reads</th></tr><tr><td>ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1</td><td>207811665</td><td>18472148</td></tr><tr><td>ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2</td><td>207811665</td><td>18472148</td></tr><tr><td>ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1</td><td>204285420</td><td>18158704</td></tr><tr><td>ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2</td><td>204285420</td><td>18158704</td></tr><tr><td>ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1</td><td>262827000</td><td>23362400</td></tr><tr><td>ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2</td><td>262827000</td><td>23362400</td></tr><tr><td>ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1</td><td>263846880</td><td>23453056</td></tr><tr><td>ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2</td><td>263846880</td><td>23453056</td></tr><tr><td>ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1</td><td>147457125</td><td>13107300</td></tr><tr><td>ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2</td><td>147457125</td><td>13107300</td></tr><tr><td>ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_1</td><td>148156875</td><td>13169500</td></tr><tr><td>ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_2</td><td>148156875</td><td>13169500</td></tr><tr><td>Total</td><td>2468769930</td><td>219446216</td></tr></tbody></table></details>";
    home_html.innerHTML += '<hr />';
    home_html.innerHTML += "<p><strong>KmerExploR</strong> visualization of your RNA-seq basic features is separated into several sections/subsections:</p><p><strong>Basic Features</strong></p><ul>    <li>Poly A / Ribo D: are my RNA-seq data based on poly-A selection protocol or ribo-depletion ?</li>    <li>Orientation: are my RNA-seq libraries stranded or not ?</li>    <li>Y chromosome: what is/are the gender(s) corresponding to my samples ?</li>    <li>Read position biases: is there a read coverage bias from 5' to 3' ends ?</li></ul><p><strong>Contamination</strong></p><ul>    <li>HeLa: are my RNA-seq data contaminated by HeLa (presence of HeLa-derived human papillomavirus 18) ?</li>    <li>Mycoplasma: are my RNA-seq data contaminated by mycoplasmas ? </li>    <li>Virus: are my RNA-seq data contaminated by viruses such as hepatitis B virus ?</li>    <li>Species: what is/are the species present into my samples ?</li></ul><p>For each subsection, a graph shows the quantification of predictor genes (Y axis, mean k-mer counts normalized per billion of k-mers in the sample) in each RNA-seq sample of your dataset (X axis). More details on the predictor genes and their selection to answer a specific biological question are described into the corresponding subsections.</p><em>Citation: <a href='https://pubmed.ncbi.nlm.nih.gov/34179780/' target='_blank'>Kmerator Suite</a>.<em>";
    };
