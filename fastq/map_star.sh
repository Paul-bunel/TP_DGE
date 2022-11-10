#!/bin/bash
# mandatory
#SBATCH --nodes=1
# option, to use remove the first comment
# name for the job, easier to find in squeue
#SBATCH --job-name=my_job_name
# filename of my program stdout and stderr
#SBATCH --output=my_program-%j.output
#SBATCH --error=my_program-%j.err
# max job run time
# #SBATCH --time=05:00:00
# number of tasks, task per node or core to use
# #SBATCH --ntasks=1
# #SBATCH --ntasks-per-node=1
# #SBATCH --threads-per-core=1
# number of cpus to use per task
# #SBATCH --cpus-per-task=3
# max ram allocated to the job
# #SBATCH --mem=15GB

# script bash classique
# Chaque commande DOIT être précédée d'un srun
srun bash -c "STAR --genomeDir /data/indexes/STAR/GRCh38 --runThreadN 8 --readFilesCommand zcat --genomeLoad LoadAndRemove --runMode alignReads --outSAMtype BAM Unsorted --readFilesIn ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_?.fastq.gz --outStd BAM_Unsorted | samtools sort --threads 6 -m 1G -o bam/ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam"
srun samtools index bam/ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun bash -c "STAR --genomeDir /data/indexes/STAR/GRCh38 --runThreadN 8 --readFilesCommand zcat --genomeLoad LoadAndRemove --runMode alignReads --outSAMtype BAM Unsorted --readFilesIn ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_?.fastq.gz --outStd BAM_Unsorted | samtools sort --threads 6 -m 1G -o bam/ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam"
srun samtools index bam/ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun bash -c "STAR --genomeDir /data/indexes/STAR/GRCh38 --runThreadN 8 --readFilesCommand zcat --genomeLoad LoadAndRemove --runMode alignReads --outSAMtype BAM Unsorted --readFilesIn ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_?.fastq.gz --outStd BAM_Unsorted | samtools sort --threads 6 -m 1G -o bam/ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam"
srun samtools index bam/ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun bash -c "STAR --genomeDir /data/indexes/STAR/GRCh38 --runThreadN 8 --readFilesCommand zcat --genomeLoad LoadAndRemove --runMode alignReads --outSAMtype BAM Unsorted --readFilesIn ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_?.fastq.gz --outStd BAM_Unsorted | samtools sort --threads 6 -m 1G -o bam/ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam"
srun samtools index bam/ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun bash -c "STAR --genomeDir /data/indexes/STAR/GRCh38 --runThreadN 8 --readFilesCommand zcat --genomeLoad LoadAndRemove --runMode alignReads --outSAMtype BAM Unsorted --readFilesIn ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_?.fastq.gz --outStd BAM_Unsorted | samtools sort --threads 6 -m 1G -o bam/ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam"
srun samtools index bam/ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun bash -c "STAR --genomeDir /data/indexes/STAR/GRCh38 --runThreadN 8 --readFilesCommand zcat --genomeLoad LoadAndRemove --runMode alignReads --outSAMtype BAM Unsorted --readFilesIn ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer_?.fastq.gz --outStd BAM_Unsorted | samtools sort --threads 6 -m 1G -o bam/ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam"
srun samtools index bam/ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam
